# Zod

    TypeScript-first schema validation with static type inference.

    npm install zod # npm
    yarn add zod # yarn
    bun add zod # bun
    pnpm add zod # pnpm

    Package JSON - "zod": "^3.20.5",

    Type of validations -
        1) Primitives
        2) Numbers
        3) Literals
        4) Strings
        5) Arrays
        6) Objects
        7) Optional
    
    Example -
        import { z } from "zod";

        export const IndividualKycFormStep1Schema = ({
          version,
          channelName,
        }: Props) => {
          return z.object({
            firstName: !version
              ? z.string().optional().or(z.literal(""))
              : z
                  .string({ required_error: "First name is required" })
                  .min(1, { message: "First name is required" })
                  .regex(/^[a-zA-Z][a-zA-Z' ]*$/, {
                    message: "Invalid character entered",
                  })
                  .max(50, { message: "Maximum of 50 characters" }),
            lastName: !version
              ? z.string().optional().or(z.literal(""))
              : z
                  .string({ required_error: "Last name is required" })
                  .min(1, { message: "Last name is required" })
                  .regex(/^[a-zA-Z][a-zA-Z' ]*$/, {
                    message: "Invalid character entered",
                  })
                  .max(50, { message: "Maximum of 50 characters" }),
            email: !version
              ? z.string().optional().or(z.literal(""))
              : z
                  .string({ required_error: "Email is required" })
                  .min(1, { message: "Email is required" })
                  .email({ message: "Please enter a valid email address" }),
            phoneNumber: !version
              ? z.string().optional().or(z.literal(""))
              : z
                  .string({ required_error: "Phone number is required" })
                  .min(1, { message: "Phone number is required" })
                  .min(10, { message: "Minimum of 10 characters" })
                  .regex(/^[0-9]+$/, { message: "Input field must be a number" })
                  .max(11, { message: "Maximum of 11 characters" })
                  .refine(
                    (val: string) =>
                      !(
                        (val.length === 11 && val.charAt(0) !== "0") ||
                        (val.length === 10 && val.charAt(0) === "0")
                      ),
                    {
                      message: "Invalid phone number",
                    }
                  ),
            businessName: z
              .string({ required_error: "Business name is required" })
              .min(1, { message: "Business name is required" })
              .max(150, { message: "Maximum of 150 characters." }),
            businessDescription: z
              .string({ required_error: "Bank description is required" })
              .min(1, { message: "Business description is required" })
              .max(150, {
                message: "Maximum of 150 characters.",
              }),
            url: z.string().optional(),
            businessAddress: z
              .string({ required_error: "Address is required" })
              .min(1, { message: "Address is required" }),
            businessHouseNo: z.string().optional(),
            businessCountry: z.string().optional(),
            homeAddress: z.string({ required_error: "Address is required" }).optional(),
            homeHouseNo: z.string().optional(),
            homeCountry: z.string().optional(),
            dateOfBirth: z.string({ required_error: "Date of birth is required" }),
            identificationDocumentNumber: z
              .string({ required_error: "ID number is required" })
              .min(1, { message: "ID number is required" }),
            referralSubCategory: z.string().optional(),
            otherSources:
              channelName?.toLowerCase() === "access bank"
                ? z.string().email().optional().or(z.literal(""))
                : channelName?.toLowerCase() === "hydrogen team"
                ? z
                    .string({ required_error: "Team member's name is required" })
                    .min(1, { message: "Team member's name is required" })
                    .max(150, { message: "Team member's name is too long" })
                : channelName?.toLowerCase() === "affiliate"
                ? z
                    .string({ required_error: "Affiliate code is required" })
                    .min(1, { message: "Affiliate code is required" })
                    .max(150, { message: "Affiliate code is too long" })
                : channelName?.toLowerCase().includes("dsa")
                ? z.string().min(1, { message: "Promo code is required" })
                : z.string().optional(),
            dsaCode: Number(version) === 1
              ? z.string({ required_error: "DSA code is required" })
                .min(1, { message: "DSA code is required" })
              : z.string().optional().or(z.literal("")),
            salesPersonnel: z.string().email().optional().or(z.literal("")),
            ptspName: z.string().optional().or(z.literal("")),
          });
        };

        const IndividualKycFormSchema1inside = IndividualKycFormStep1Schema({
            version,
            channelName: channel.name?.toLowerCase(),
        });

        type Types = z.infer<typeof IndividualKycFormSchema1inside>;
