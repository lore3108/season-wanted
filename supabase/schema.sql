import { z } from 'zod';

export const signUpSchema = z.object({
  username: z.string().min(2).max(24),
  email: z.string().email(),
  password: z.string().min(8),
  birthDate: z.string().refine((value) => !Number.isNaN(new Date(value).getTime()), 'Data di nascita non valida'),
  acceptedTerms: z.boolean().refine((value) => value, 'Devi accettare termini e privacy'),
});

export const interestSchema = z.object({
  campaignId: z.string().min(1),
  amount: z.number().min(1).max(50),
});

export const proposalSchema = z.object({
  title: z.string().min(2).max(80),
  kind: z.string().min(2),
  details: z.string().min(40).max(1000),
  officialLink: z.string().url().optional().or(z.literal('')),
});
