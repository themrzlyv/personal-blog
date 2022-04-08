import mongoose, { Schema } from 'mongoose';

const TagSchema: Schema = new mongoose.Schema(
  {
    tagName: {
      type: String,
      maxlength: 25,
      required: true,
      trim: true,
      unique: true,
    },
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.models.Tag || mongoose.model('Tag', TagSchema);
