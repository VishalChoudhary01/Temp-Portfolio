import { FaGraduationCap, FaUniversity, FaSchool, FaBook } from "react-icons/fa";

export const educationData = [
  { 
    year: "2023", 
    degree: "MCA", 
    institution: "Banaras Hindu University",
    description: "Master of Computer Applications",
    icon: FaGraduationCap,
    iconColor: "var(--edu-mca-icon-dark)",
    dotColorFrom: "var(--edu-mca-dot-from)",
    dotColorTo: "var(--edu-mca-dot-to)",
    borderFrom: "var(--edu-mca-border-from)",
    borderTo: "var(--edu-mca-border-to)"
  },
  { 
    year: "2020", 
    degree: "BCA", 
    institution: "Anugrah Narayan College",
    description: "Bachelor of Computer Applications",
    icon: FaUniversity,
    iconColor: "var(--edu-bca-icon-dark)",
    dotColorFrom: "var(--edu-bca-dot-from)",
    dotColorTo: "var(--edu-bca-dot-to)",
    borderFrom: "var(--edu-bca-border-from)",
    borderTo: "var(--edu-bca-border-to)"
  },
  { 
    year: "2017", 
    degree: "I.Sc", 
    institution: "College of Commerce",
    description: "Intermediate Science",
    icon: FaSchool,
    iconColor: "var(--edu-isc-icon-dark)",
    dotColorFrom: "var(--edu-isc-dot-from)",
    dotColorTo: "var(--edu-isc-dot-to)",
    borderFrom: "var(--edu-isc-border-from)",
    borderTo: "var(--edu-isc-border-to)"
  },
  { 
    year: "2015", 
    degree: "Matric", 
    institution: "St. Xavier's High School",
    description: "Secondary School Education",
    icon: FaBook,
    iconColor: "var(--edu-matric-icon-dark)",
    dotColorFrom: "var(--edu-matric-dot-from)",
    dotColorTo: "var(--edu-matric-dot-to)",
    borderFrom: "var(--edu-matric-border-from)",
    borderTo: "var(--edu-matric-border-to)"
  },
];