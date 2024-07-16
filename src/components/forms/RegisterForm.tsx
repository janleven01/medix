"use client";

import Image from "next/image";
import FileUploader from "../FileUploader";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import { useState } from "react";
import { PatientFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { registerPatient } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import {
  Doctors,
  GenderOptions,
  IdentificationTypes,
  PatientFormDefaultValues,
} from "@/constants";

const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PatientFormValidation>) => {
    setIsLoading(true);

    let formData;
    console.log('here')
    if (values.identificationDocument &&
      values.identificationDocument.length > 0
    ) {
      const blobFile = new Blob([values.identificationDocument[0]], {
        type: values.identificationDocument[0].type,
      })

      formData = new FormData()
      formData.append('blobFile', blobFile);
      formData.append('fileName', values.identificationDocument[0].name)
    }

    try {
      const patientData = {
        ...values,
        userId: user.$id,
        birthDate: new Date(values.birthDate),
        identificationDocument: formData
      }

      // @ts-ignore
      const patient = await registerPatient(patientData)
      
      console.log(patient)

      if (patient) router.push(`/patients/${user.$id}/new-appointment`)
      
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10 flex-1"
      >
        <section>
          <div className="relative ml-6 float-right h-[555px] w-[50%] rounded-[3rem] hidden md:block overflow-hidden text-start bg-gradient-to-tl from-white via-primary to-primary">
            <div className="p-9">
              <h1 className="lg:text-[55px] text-[40px] leading-tight font-bold">
                Start with your information
              </h1>
              <p className="lg:pt-5 pt-3 lg:text-lg">
                Ensure a seamless booking and management experience, with a
                guarantee that your data will remain confidential.
              </p>
            </div>
            <Image
              src="/assets/images/register-img.png"
              alt="onboarding img"
              width={1200}
              height={1200}
              className="absolute -bottom-12 object-contain h-[70%]"
              priority
            />
          </div>
          <div className="mb-10 space-y-4 max-md:text-center">
            <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
            <p className="text-sm text-muted-foreground">
              Tell us more about yourself.
            </p>
          </div>

          {/* PERSONAL INFORMATION */}

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-10">
              Personal Information
            </h2>

            {/* NAME */}

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Full name"
              placeholder="ex. Matthew B. Anderson"
            />

            {/* EMAIL AND PHONE */}

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label="Email"
                placeholder="matthew01@gmail.com"
                iconSrc="/assets/icons/email.svg"
                iconAlt="user"
              />
              <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phone"
                label="Phone Number"
                placeholder="(222) 123-4567"
              />
            </div>

            {/* BIRTH DATE */}

            <div className="flex max-sm:flex-col lg:gap-6 gap-4">
              <div className="w-full">
                <CustomFormField
                  fieldType={FormFieldType.DATE_PICKER}
                  control={form.control}
                  name="birthDate"
                  label="Date of Birth"
                />
              </div>
              <div className="w-full">
                <CustomFormField
                  fieldType={FormFieldType.SKELETON}
                  control={form.control}
                  name="gender"
                  label="Gender"
                  renderSkeleton={(field) => (
                    <FormControl>
                      <RadioGroup
                        className="flex h-11 gap-2 xl:justify-between"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        {GenderOptions.map((option) => (
                          <div
                            key={option}
                            className="flex h-full flex-1 items-center gap-2 rounded-md border p-2"
                          >
                            <RadioGroupItem value={option} id={option} />
                            <Label htmlFor={option} className="cursor-pointer">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  )}
                />
              </div>
            </div>

            {/* ADDRESS AND OCCUPATION */}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="address"
                label="Address"
                placeholder="1515 Broadway, New York, NY"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="occupation"
                label="Occupation"
                placeholder="Web Developer"
              />
            </div>

            {/* EMERGENCY CONTACT */}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="emergencyContactName"
                label="Emergency Contact Name"
                placeholder="ex. Mary S. Smith"
              />
              <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="emergencyContactNumber"
                label="Emergency Contact Number"
                placeholder="(222) 123-4567"
              />
            </div>
          </div>
        </section>

        <section className="flex max-lg:flex-col w-full gap-6">
          {/* MEDICAL INFORMATION */}

          <div className="space-y-6 w-full">
            <h2 className="text-2xl font-semibold mb-10">
              Medical Information
            </h2>
            {/* PHYICIAN */}
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Primary Physician"
              placeholder="Select a physician"
            >
              {Doctors.map((doctor) => (
                <SelectItem key={doctor.name} value={doctor.name}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={33}
                      height={33}
                    />
                    <h4>{doctor.name}</h4>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            {/* INSURANCE PROVIDER & INSURANCE POLICY NUMBER */}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="insuranceProvider"
                label="Insurance Provider"
                placeholder="Secure Health Inc."
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="insurancePolicyNumber"
                label="Insurance Policy Number"
                placeholder="POL12345678"
              />
            </div>

            {/* ALLERGIES & CURRENT MEDICATION */}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="allergies"
                label="Allergies (if any)"
                placeholder="Shellfish, Pollen, Penicillin"
              />
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="currentMedication"
                label="Current Medication (if any)"
                placeholder="Lisinopril, Paracetamol"
              />
            </div>

            {/* FAMILY MEDICAL HISTORY & PAST MEDICAL HISTORY */}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="familyMedicalHistory"
                label="Family Medical History"
                placeholder="Heart Disease, Diabetes"
              />
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="pastMedicalHistory"
                label="Past Medical History"
                placeholder="Hypertension, Asthma"
              />
            </div>
          </div>

          {/* IDENTIFICATION & VERIFICATION */}

          <div className="space-y-6 w-full">
            <h2 className="text-2xl font-semibold mb-10">
              Identification and Verification
            </h2>

            {/* Identification Type */}

            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="identificationType"
              label="Identification Type"
              placeholder="Select an Identification Type"
            >
              {IdentificationTypes.map((item) => (
                <SelectItem key={item} value={item}>
                  <h4>{item}</h4>
                </SelectItem>
              ))}
            </CustomFormField>

            {/* Identification Number */}

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="identificationNumber"
              label="Identification Number"
              placeholder="ABC123DEF456"
            >
              {IdentificationTypes.map((item) => (
                <SelectItem key={item} value={item}>
                  <h4>{item}</h4>
                </SelectItem>
              ))}
            </CustomFormField>

            {/* Identification Document */}

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="identificationDocument"
              label="Scanned ID document"
              renderSkeleton={(field) => (
                <FormControl>
                  <FileUploader files={field.value} onChange={field.onChange} />
                </FormControl>
              )}
            />
          </div>
        </section>

        {/* CONSENT & PRIVACY */}

        <div className="space-y-6 w-full">
          <h2 className="text-2xl font-semibold mb-10">Consent and Privacy</h2>

          {/* Treatment Consent */}

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="treatmentConsent"
            label="I consent to receive necessary treatment as recommended by healthcare professionals."
          />

          {/* Disclosure Consent */}

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="disclosureConsent"
            label="I agree to allow the sharing of my information as needed for the specified purposes."
          />

          {/* Privacy  Consent */}

          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="privacyConsent"
            label="I understand and agree to abide by the terms of the privacy policy regarding the handling of my personal information."
          />
        </div>
          <SubmitButton isLoading={isLoading}>
            Submit and Continue
          </SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
