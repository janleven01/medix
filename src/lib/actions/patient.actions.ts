'use server'

import { ID, Query } from "node-appwrite";
import { databases, storage, users } from "../appwrite.config";
import { parseStringify } from "../utils";

import { InputFile } from 'node-appwrite/file'

export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log({ newUser });

    return parseStringify(newUser); 
  } catch (error: any) {
    // Check for existing user
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);

      return documents.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId)

    return parseStringify(user)
  } catch (error) {
    console.log(error)
  }
}

export const registerPatient = async ({ identificationDocument, ...patient}: RegisterUserParams) => {
  try {
    let file;

    if (identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get('blobFile') as Blob,
        identificationDocument?.get('fileName') as string
      )

      file = await storage.createFile(process.env.NEXT_BUCKET_ID!, ID.unique(), inputFile )
    }

    const newPatient =  await databases.createDocument(
      process.env.DATABASE_ID!,
      process.env.PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id || null,
        identificationDocumentUrl: `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_BUCKET_ID}/files/${file?.$id}/view?project=${process.env.NEXT_APPWRITE_PROJECT}`,
        ...patient
      }
    )
    
    return parseStringify(newPatient)
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
}

export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.PATIENT_COLLECTION_ID!,
      [Query.equal('userId', userId)]
    )

    return parseStringify(patients.documents[0])
  } catch (error) {
    console.log(error)
  }
}
