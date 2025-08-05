const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/studentdb';
mongoose.connect(mongoURI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');

  
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number,
      marks: Number
    });

    const Student = mongoose.model('Student', studentSchema);

    await Student.deleteMany({});

    const studentsData = [
      { name: "Aarav", age: 18, marks: 85 },
      { name: "Advaith", age: 19, marks: 91 },
      { name: "Karan", age: 17, marks: 76 },
      { name: "Ihsan", age: 18, marks: 89 },
      { name: "Rahul", age: 20, marks: 65 },
      { name: "Jithin", age: 18, marks: 94 },
      { name: "Arjun", age: 19, marks: 88 },
      { name: "Mukesh", age: 20, marks: 72 },
      { name: "Vikram", age: 18, marks: 80 },
      { name: "Alen", age: 17, marks: 78 },
      { name: "Rohit", age: 21, marks: 59 },
      { name: "Jauhar", age: 20, marks: 93 },
      { name: "Yash", age: 19, marks: 81 },
      { name: "Pooja", age: 18, marks: 69 },
      { name: "Harshit", age: 20, marks: 74 },
      { name: "Alan John", age: 19, marks: 87 },
      { name: "Siddharth", age: 21, marks: 66 },
      { name: "Sriram", age: 18, marks: 90 },
      { name: "Nikhil", age: 17, marks: 77 },
      { name: "Riya", age: 19, marks: 84 }
    ];

    await Student.insertMany(studentsData);
    console.log('\n📥 Inserted students:\n');

    const allStudents = await Student.find();
    allStudents.forEach(s => {
      console.log(`${s.name}, Age: ${s.age}, Marks: ${s.marks}`);
    });

    console.log('\n📊 Students Sorted by Marks (High to Low):\n');
    const sortedStudents = await Student.find().sort({ marks: -1 });
    sortedStudents.forEach(s => {
      console.log(`${s.name}, Age: ${s.age}, Marks: ${s.marks}`);
    });

    mongoose.disconnect();
  })
  .catch(err => console.error('❌ MongoDB Error:', err));
