const FormData = {
  foodcourt: {
    1: { q: "Service", next: 2, ref: "service", ratingType: "stars" },
    2: { q: "Staff", next: 3, ref: "staff", ratingType: "stars" },
    3: { q: "Food Quality", next: 4, ref: "foodQuality", ratingType: "stars" },
    4: {
      q: "Value For Money",
      next: 5,
      ref: "valueForMoney",
      ratingType: "stars"
    },
    5: { q: "Cleanliness", next: 6, ref: "cleanliness", ratingType: "stars" },
    6: { q: "Overall Rating", next: 7, ref: "rating", ratingType: "stars" },
    7: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  },
  airline: {
    1: { q: "Name of Airline", next: 2, ref: "name", ratingType: "dropdown" },
    2: { q: "Staff", next: 3, ref: "staff", ratingType: "stars" },
    3: {
      q: "Will you recommend this Airline",
      next: 4,
      ref: "recommendation",
      ratingType: "stars"
    },
    4: { q: "Service", next: 5, ref: "service", ratingType: "stars" },
    5: { q: "Overall Rating", next: 6, ref: "rating", ratingType: "stars" },
    6: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  },
  checkin: {
    1: { q: "Service", next: 2, ref: "service", ratingType: "stars" },
    2: { q: "Staff", next: 3, ref: "staff", ratingType: "stars" },
    3: { q: "Overall Rating", next: 4, ref: "rating", ratingType: "stars" },
    4: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  },
  helpdesk: {
    1: {
      q: "How efficiently the help desk answered your query?",
      next: 2,
      ref: "staffEfficiency",
      ratingType: "stars"
    },
    2: { q: "Behaviour of Staff", next: 3, ref: "staff", ratingType: "stars" },
    3: { q: "Overall Rating", next: 4, ref: "rating", ratingType: "stars" },
    4: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  },
  lounge: {
    1: { q: "Lounge Name", next: 2, ref: "name", ratingType: "dropdown" },
    2: { q: "Staff", next: 3, ref: "staff", ratingType: "stars" },
    3: {
      q: "Will you recommend this lounge",
      next: 4,
      ref: "recommendation",
      ratingType: "stars"
    },
    4: { q: "Food", next: 5, ref: "food", ratingType: "stars" },
    5: { q: "Service", next: 6, ref: "service", ratingType: "stars" },
    6: { q: "Overall Rating", next: 7, ref: "rating", ratingType: "stars" },
    7: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  },
  store: {
    1: { q: "name", next: 2, ref: "name", ratingType: "dropdown" },
    2: {
      q: "product Quality",
      next: 3,
      ref: "productQuality",
      ratingType: "stars"
    },
    3: {
      q: "recommendation",
      next: 4,
      ref: "recommendation",
      ratingType: "stars"
    },
    4: { q: "service", next: 5, ref: "service", ratingType: "stars" },
    5: { q: "staff", next: 6, ref: "staff", ratingType: "stars" },
    6: {
      q: "value For Money",
      next: 7,
      ref: "valueForMoney",
      ratingType: "stars"
    },
    7: { q: "Overall Rating", next: 8, ref: "rating", ratingType: "stars" },
    8: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  },
  washroom: {
    1: { q: "Cleanliness", next: 2, ref: "cleanliness", ratingType: "stars" },
    2: {
      q: "Availability Of Toiletries",
      next: 3,
      ref: "availabilityOfToiletries",
      ratingType: "stars"
    },
    3: { q: "Overall Rating", next: 4, ref: "rating", ratingType: "stars" },
    4: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  },
  baggage: {
    1: { q: "Service", next: 2, ref: "service", ratingType: "stars" },
    2: { q: "Staff", next: 3, ref: "staff", ratingType: "stars" },
    3: { q: "Overall Rating", next: 4, ref: "rating", ratingType: "stars" },
    4: { q: "Feedback Message", ref: "feedbackMessage", ratingType: "text" }
  }
};

export default FormData;
