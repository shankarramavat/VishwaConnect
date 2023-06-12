const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema( //define answer schema 
  {
    ref_question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question", //foregin key
    },
    answer: { //object when,what who
      answer_txt: {
        type: String,
        trim: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Answer = mongoose.model("Answer", answerSchema);//export db 

module.exports = Answer;
