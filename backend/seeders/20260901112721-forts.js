"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("forts", [
      {
        name: "Raigad Fort",
        state: "Maharashtra",
        location: "Raigad, Maharashtra",
        type: "Hill Fort",
        description:
          "Raigad Fort was the capital of Chhatrapati Shivaji Maharaj's kingdom and is one of the most important forts in Maharashtra.",
        image:
          "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
        createdAt: now,
        updatedAt: now,
      },

      {
        name: "Sinhagad Fort",
        state: "Maharashtra",
        location: "Pune, Maharashtra",
        type: "Hill Fort",
        description:
          "Sinhagad Fort is a historic hill fort near Pune, famous for the bravery of Tanaji Malusare.",
        image:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
        createdAt: now,
        updatedAt: now,
      },

      {
        name: "Pratapgad Fort",
        state: "Maharashtra",
        location: "Satara, Maharashtra",
        type: "Hill Fort",
        description:
          "Pratapgad Fort is known for its historical importance and the famous encounter between Shivaji Maharaj and Afzal Khan.",
        image:
          "https://images.unsplash.com/photo-1625736301209-7a0d0d9f9f5d?auto=format&fit=crop&w=1000&q=80",
        createdAt: now,
        updatedAt: now,
      },

      {
        name: "Red Fort",
        state: "Delhi",
        location: "New Delhi, Delhi",
        type: "Historic Fort",
        description:
          "The Red Fort is a magnificent historic fort in Delhi and an important symbol of India's history.",
        image:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        createdAt: now,
        updatedAt: now,
      },

      {
        name: "Chittorgarh Fort",
        state: "Rajasthan",
        location: "Chittorgarh, Rajasthan",
        type: "Hill Fort",
        description:
          "Chittorgarh Fort is one of India's largest fort complexes and represents the history and heritage of Mewar.",
        image:
          "https://images.unsplash.com/photo-1599661046827-dacff0c0f09d?auto=format&fit=crop&w=1000&q=80",
        createdAt: now,
        updatedAt: now,
      },

      {
        name: "Mehrangarh Fort",
        state: "Rajasthan",
        location: "Jodhpur, Rajasthan",
        type: "Hill Fort",
        description:
          "Mehrangarh Fort rises above Jodhpur and is known for its impressive architecture, museums and history.",
        image:
          "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("forts", null, {});
  },
};