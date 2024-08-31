![Medix banner](https://github.com/user-attachments/assets/7c5f854c-c32b-4099-ba73-8950f49bced3)
<div align="center">
   <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>
 
  <h1 align="center">HealthCare App</h3>
  <br/>
  <div align="center">
     A health care management system project that streamlines patient registration, appointment scheduling, and administrative tasks.
  </div>
  <br/>
 
  <a href="https://medix-pi.vercel.app/" target="_blank"> <img src="https://img.shields.io/badge/Vercel%20live-black?logo=vercel&logoColor=white&color=black"/></a>
  <img src="https://img.shields.io/badge/Admin%20Passkey-213123-black"/>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Features](#features)
2. ⚙️ [Tech Stack](#tech-stack)
3. 📦 [Installation](#installation)
4. 🧩 [Snippets (Code to Copy)](#snippets)
5. 🔗 [Assets](#assets)
6. 📁 [Folder Structure](#folder-structure)
7. 🌱 [Challenges and Learnings](#challenges)

## <a name="features">✨ Features</a>
 
🔸**Patient Registration:** Users can easily register and create personal profiles.

🔸**Appointment Booking:** Patients have the flexibility to book multiple appointments with doctors at their desired times.

🔸**Admin Management:** Administrators can efficiently manage, confirm, reschedule, and cancel appointments. A passkey is entered by the admin once and then cached for seamless access.

🔸**Responsive Design:** The application is fully responsive and works seamlessly across all devices.

🔸**Secure File Upload:** Utilizes Appwrite storage for secure file uploads and management.

## <a name="tech-stack">⚙️ Tech stack</a>

🔹**Frontend:** React, Next.js, Typescript, TailwindCSS, shadcn/ui

🔹**Backend:** Node.js, Appwrite

🔹**Deployment:** Vercel

## <a name="installation">📦 Installation</a>

To run the Medix app locally, follow these steps:

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [yarn](https://www.npmjs.com/package/yarn)

1. **Cloning the repository**

```bash
git clone https://github.com/janleven01/medix.git
cd medix
```

2. **Install dependencies**

Install the project dependencies using npm:

```bash
yarn add
```

3. **Set Up Environment Variables**

Create a .env file in the root directory add the following content:

```env
NEXT_PUBLIC_ADMIN_PASSKEY=213123

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_APPWRITE_PROJECT=
NEXT_APPWRITE_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_BUCKET_ID=
```

Replace the placeholder values with your Appwrite project credentials. Sign up for a free account at [Appwrite website](https://appwrite.io/) to obtain them.

4. **Running the application**

```bash
yarn dev
```

**Open in browser:** [http://localhost:3000](http://localhost:3000) to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type { Config } from "tailwindcss"
import { fontFamily } from 'tailwindcss/defaultTheme'  

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```
</details>

<details>
<summary><code>app/global.css</code></summary>
 
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* REMOVE BACKGROUND COLOR FOR INPUT AUTOCOMPLETE */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 20 14.3% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 20 14.3% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 20 14.3% 4.1%;
    --primary: 24.6 95% 53.1%;
    --primary-foreground: 60 9.1% 97.8%;
    --secondary: 60 4.8% 95.9%;
    --secondary-foreground: 24 9.8% 10%;
    --muted: 60 4.8% 95.9%;
    --muted-foreground: 25 5.3% 44.7%;
    --accent: 60 4.8% 95.9%;
    --accent-foreground: 24 9.8% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 60 9.1% 97.8%;
    --border: 20 5.9% 90%;
    --input: 20 5.9% 90%;
    --ring: 24.6 95% 53.1%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 60 9.1% 97.8%;
    --card: 20 14.3% 4.1%;
    --card-foreground: 60 9.1% 97.8%;
    --popover: 20 14.3% 4.1%;
    --popover-foreground: 60 9.1% 97.8%;
    --primary: 20.5 90.2% 60%;
    --primary-foreground: 60 9.1% 97.8%;
    --secondary: 12 6.5% 15.1%;
    --secondary-foreground: 60 9.1% 97.8%;
    --muted: 12 6.5% 15.1%;
    --muted-foreground: 24 5.4% 63.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 60 9.1% 97.8%;
    --destructive: 0 72.2% 50.6%;
    --destructive-foreground: 60 9.1% 97.8%;
    --border: 12 6.5% 15.1%;
    --input: 12 6.5% 15.1%;
    --ring: 20.5 90.2% 48.2%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  /* ALIGNMENTS */
  .flex-center {
    @apply flex items-center justify-center;
  }

  .flex-between {
    @apply flex items-center justify-between;
  }
  /* shadcn-otp */
  .shadcn-otp-slot {
    @apply md:size-16 size-12 border rounded-lg my-6 text-4xl
  }
}

/* REACT PHONE NUMBER INPUT OVERRIDES */
.PhoneInputInput {
  outline: none;
  margin-left: 4px;
  background: var(--background);
  font-size: 14px;
  font-weight: 500;
}

/* =====  REACT-DATEPICKER OVERRIDES */
.react-datepicker-wrapper.date-picker {
  display: flex;
  align-items: center;
}

.react-datepicker {
  outline: 1px solid #363a3d;
  display: absolute;
  left: 5%;
}


.react-datepicker-outside-month{
  color: #F57C3D !important;
}

.react-datepicker,
.react-datepicker__time,
.react-datepicker__header,
.react-datepicker__current-month,
.react-datepicker__day,
.react-datepicker-time__header {
  background-color: #0C0A09 !important;
  border: none !important;
  color: #FAFAF9 !important;
}

.react-datepicker__day-name {
  padding-top: 10px !important;
  color: #A8A29E !important;
}

.react-datepicker__current-month,
.react-datepicker-time__header {
  color: #FAFAF9 !important;
}

.react-datepicker__triangle {
  display: none !important
}

.react-datepicker__day:hover,
.react-datepicker__time-list-item:hover {
  background-color: #363a3d !important;
}

.react-datepicker__input-container input {
  background-color: #0C0A09 !important;
  width: 100%;
  outline: none;
}

.react-datepicker__time-container,
.react-datepicker__time-list-item:hover {
  max-width: 72px !important;
}

.react-datepicker__day--selected,
.react-datepicker__day--selected:hover {
  background-color: #F57C3D !important;
  color: #ffffff !important;
  border-radius: 4px;
}

.react-datepicker__time-list-item--selected,
.react-datepicker__time-list-item--selected:hover
 {
  background-color: #F57C3D !important;
  max-width: 72px !important;
}

.react-datepicker__time-container {
  border-left: 1px solid #363a3d !important;
}

.react-datepicker__time-list-item {
  display: flex !important;
  align-items: center !important;
}

.react-datepicker__time-list::-webkit-scrollbar {
  display: none;
}

.disabled-date {
  color: #5A5654 !important; /* Greyed out color for disabled dates */
  pointer-events: none; /* Prevent clicks on disabled dates */
}
```
</details>

<details>
<summary><code>constants/index.ts</code></summary>
 
 ```typescript
export const GenderOptions = ["Male", "Female"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
```

</details>

<details>
<summary><code>types/index.d.ts</code></summary>
 
 ```typescript
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "Male" | "Female"
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
};
```

</details>

<details>
<summary><code>types/appwrite.types.ts</code></summary>
 
 ```typescript
import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
```

</details>

<details>
<summary><code>lib/validation.ts</code></summary>
 
 ```typescript
import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["Male", "Female"]),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  emergencyContactName: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(50, "Contact name must be at most 50 characters"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Invalid phone number"
    ),
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  insuranceProvider: z
    .string()
    .min(2, "Insurance name must be at least 2 characters")
    .max(50, "Insurance name must be at most 50 characters"),
  insurancePolicyNumber: z
    .string()
    .min(2, "Policy number must be at least 2 characters")
    .max(50, "Policy number must be at most 50 characters"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to treatment in order to proceed",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to disclosure in order to proceed",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
```

</details>

## <a name="assets">🔗 Assets</a>

You can find the project's public assets [here](https://drive.google.com/drive/folders/1EB3dv4WXA0dfDeJHTTEV1pZNqZclPrEt?usp=drive_link).

## <a name="folder-structure">📁 Folder Structure</a>

```bash
medix/
├── public/                               # Public assets (e.g., images, icons)
├── src/
│   ├── app/                              # Next.js App Router configuration and routes
│       ├── admin/                        # Admin-related routes and components
│       ├── patients/                     # Patient-related routes and components
│           ├── [userId]/                 # Dynamic route for user-specific pages
│               ├── new-appointment/      # Page for scheduling new appointments
│                   ├── success/          # Success page displayed after an appointment is created
│               ├── register/             # Page for patient registration
│   ├── components/                       # Reusable UI components
│       ├── forms/                        # Form components for user input
│       ├── table/                        # Components for displaying tabular data
│       ├── ui/                           # Reusable components from shadcn/ui
│   ├── constants/                        # Global constants and default values
│   ├── lib/                              # Utility libraries and configurations (e.g., schema form validation, Appwrite config)
│       ├── actions/                      # Server-side actions for backend communication with Appwrite
│   ├── types/                            # TypeScript types and interfaces
├── .env.local                            # Local environment variables for development
├── .gitignore                            # Specifies files and directories to be ignored by Git
├── package.json                          # Project dependencies
└── tailwind.config.ts                    # Tailwind CSS configuration file
```

## <a name="challenges">🌱 Challenges and Learnings</a>

1. **Form Validation 🔍**

- Implementing robust form validation and ensuring data integrity using a combination of react-hook-form for managing form state and Zod for schema validation.
- This approach deepened my understanding of creating maintainable, type safe, and scalable form validation systems.

2. **Asynchronous Operations 🔁**
   
- Effective asynchronous operation was essential for a smooth user experience. I utilized async/await syntax and try/catch blocks to handle API request and error management, particularly when interacting with Appwrite.
- Understanding how to structure asynchronous functions and manage state transitions (loading, success, or error states) was a key learning learning outcome.

4. **Backend Communication 🌐**
   
     Gaining insights into how backend services communicate and handle data through:

- Appwrite SDK: Utilizing the Appwrite SDK for performing operations like user creation, file storage, and document management without direct HTTP requests.
- Database and File Storage: Managing user and patient data efficiently by creating, retrieving, and updating records in the database and handling file uploads.

4. **Maximizing ShadCN Capabilities 💎**

- ShadCN’s UI components accelerated the development of the app's interface. By leveraging reusable components and customizations,
- I created a cohesive and visually appealing design while focusing on core development areas.

These challenges were instrumental in my professional development, enhancing my skills and enabling me to create a more robust and feature-rich application.

##
