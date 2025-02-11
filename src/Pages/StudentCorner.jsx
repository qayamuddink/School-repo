import React from "react";

const StudentCorner = () => {
  const announcements = [
    { id: 1, text: "📢 Science Fair Registration is open till Feb 20th!" },
    { id: 2, text: "📝 Exam schedule for March 2025 is now available." },
    { id: 3, text: "🏆 Congratulations to our Debate Team for winning 1st place!" },
  ];

  const resources = [
    { id: 1, title: "Math Practice Sheets", link: "/resources/math" },
    { id: 2, title: "English Literature Notes", link: "/resources/english" },
    { id: 3, title: "Science Experiment Guides", link: "/resources/science" },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">🎓 Student Corner</h2>
        <p className="text-gray-600 mt-2">Stay updated with announcements, resources, and achievements!</p>
      </div>

      {/* Announcements */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">📌 Announcements</h3>
        <ul className="mt-2 space-y-2">
          {announcements.map((item) => (
            <li key={item.id} className="bg-white shadow p-3 rounded-lg">
              {item.text}
            </li>
          ))}
        </ul>
      </div>

   
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">📚 Study Resources</h3>
        <ul className="mt-2 space-y-2">
          {resources.map((item) => (
            <li key={item.id} className="bg-white shadow p-3 rounded-lg">
              <a href={item.link} className="text-blue-500 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">🏅 Achievements</h3>
        <p className="bg-white shadow p-3 rounded-lg">
          Our students have excelled in academics, sports, and cultural events. Keep up the great work! 🚀
        </p>
      </div>
    </section>
  );
};

export default StudentCorner;
