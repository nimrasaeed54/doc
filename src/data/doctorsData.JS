
export const doctorsData = [
  {
    id: "1",
    name: "Dr. John Doe",
    location: "New York, NY",
    areas: ["LoDo", "Capitol Hill", "Manhattan", "Brooklyn", "Queens"],  // Areas where the doctor is available
    specialty: "Cardiology",
    picture: "male-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["9:00 AM", "10:00 AM", "11:00 AM"],
      "2024-12-01": ["1:00 PM", "2:00 PM"],
      "2024-12-05": ["11:00 PM", "2:00 PM"],
      "2024-12-06": ["12:00 PM", "2:00 PM"],
      "2024-12-07": ["1:00 PM", "3:00 PM","8:00 AM", "10:00 AM", "12:00 PM"],
      "2024-12-08": ["12:00 PM", "2:00 PM"],
      "2024-12-09": ["1:00 PM", "2:00 PM"],  
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
      
    }
  },
  {
    id: "2",
    name: "Dr. Jane Smith",
    location: "Los Angeles, CA",
    areas: ["Downtown", "Santa Monica", "Hollywood"],  // Areas where the doctor is available
    specialty: "Dermatology",
    picture: "female-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["8:00 AM", "12:00 PM"],
      "2024-12-01": ["10:00 AM", "2:00 PM"],
      "2024-12-04": ["1:00 PM", "2:00 PM"],
      "2024-12-05": ["1:00 PM", "2:00 PM"],
      "2024-12-06": ["11:00 AM", "2:00 PM"],
      "2024-12-07": ["1:00 PM", "3:00 PM"],
      "2024-12-08": ["12:00 PM", "2:00 PM"],
      "2024-12-09": ["1:00 PM", "2:00 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "3",
    name: "Dr. Emily Clark",
    location: "Chicago, IL",
    areas: ["Lincoln Park", "Downtown", "The Loop"],  // Areas where the doctor is available
    specialty: "Pediatrics",
    picture: "female-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["9:30 AM", "11:30 AM"],
      "2024-12-01": ["1:00 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "4",
    name: "Dr. Michael Brown",
    location: "Houston, TX",
    areas: ["Downtown", "Uptown", "Montrose", "Santa Monica"],  // Areas where the doctor is available
    specialty: "Orthopedics",
    picture: "male-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["8:00 AM", "10:30 AM"],
      "2024-12-01": ["9:00 AM", "11:00 AM"],
      "2024-12-09": ["1:00 PM", "2:00 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "5",
    name: "Dr. Sarah Williams",
    location: "San Francisco, CA",
    areas: ["Downtown", "Uptown", "Mission District", "Soma", "Marina"], 
    specialty: "Neurology",
    picture: "female-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["10:00 AM", "1:00 PM"],
      "2024-12-01": ["2:00 PM", "3:00 PM"],
      "2024-12-08": ["12:00 PM", "2:00 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "6",
    name: "Dr. David Taylor",
    location: "Miami, FL",
    areas: ["South Beach", "Coral Gables", "Downtown", "Queen Anne"],  
    specialty: "General Medicine",
    picture: "male-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["9:00 AM", "11:00 AM"],
      "2024-12-01": ["1:30 PM", "3:00 PM"],
      "2024-12-07": ["1:00 PM", "3:00 PM"],
      "2024-12-14": ["12:00 PM", "2:00 PM"],
      "2024-12-20": ["1:00 PM", "2:00 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "7",
    name: "Dr. Olivia Green",
    location: "Seattle, WA",
    areas: ["Uptown", "Mission District", "Capitol Hill", "Ballard", "Queen Anne", "Highlands"],
    specialty: "Gynecology",
    picture: "female-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["8:00 AM", "10:00 AM", "12:00 PM"],
      "2024-12-01": ["1:00 PM"],
      "2024-12-20": ["1:00 PM", "2:00 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "8",
    name: "Dr. James Moore",
    location: "Austin, TX",
    areas: ["Mission District", "Capitol Hill", "Downtown", "Zilker", "South Congress"],  
    specialty: "Psychiatry",
    picture: "male-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["9:00 AM", "11:00 AM"],
      "2024-12-01": ["2:00 PM", "3:30 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "9",
    name: "Dr. Sophia Harris",
    location: "Phoenix, AZ",
    areas: ["Mission District", "Capitol Hill", "Scottsdale", "Tempe", "Downtown", "Queen Anne"],  
    specialty: "Endocrinology",
    picture: "female-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["10:00 AM", "1:00 PM"],
      "2024-12-01": ["9:00 AM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  },
  {
    id: "10",
    name: "Dr. William Wilson",
    location: "Denver, CO",
    areas: ["Capitol Hill", "Scottsdale", "LoDo", "Capitol Hill", "Highlands"],  
    specialty: "Urology",
    picture: "male-doctor.jpg",
    availableSlots: {
      "2024-11-30": ["8:00 AM", "9:30 AM"],
      "2024-12-01": ["11:00 AM", "2:00 PM"],
      "2024-12-30": ["8:00 AM", "12:00 PM"],
      "2024-12-26": ["10:00 AM", "2:00 PM"]
    }
  }
];

export default doctorsData;
