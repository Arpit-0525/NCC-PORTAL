import { Cadet } from "@/types/cadet";

export const cadets: Cadet[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    parentName: "Mahesh Sharma",
    phone: "9876543210",
    parentPhone: "9123456780",
    bloodGroup: "B+",
    aadhaar: "123456789012",
    bankAccount: "456789123456",
    rank: "Cadet",
    joinedAt: "2024-06-01",
    performance: [
  { month: "Jan", drill: 70, physical: 65, theory: 80, social: 60 },
  { month: "Feb", drill: 75, physical: 70, theory: 82, social: 65 },
  { month: "Mar", drill: 80, physical: 72, theory: 85, social: 70 },
]
  },
  {
    id: "2",
    name: "Aman Verma",
    parentName: "Rakesh Verma",
    phone: "9988776655",
    parentPhone: "9012345678",
    bloodGroup: "O+",
    aadhaar: "987654321098",
    bankAccount: "987123654321",
    rank: "Lance Corporal",
    joinedAt: "2023-08-15",
    performance: [
  { month: "Jan", drill: 70, physical: 65, theory: 80, social: 60 },
  { month: "Feb", drill: 75, physical: 70, theory: 82, social: 65 },
  { month: "Mar", drill: 80, physical: 72, theory: 85, social: 70 },
],
  },
];