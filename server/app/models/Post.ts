import mongoose, { Schema } from 'mongoose';

const PostSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 35,
      required: true,
    },
    content: {
        type: String,
        maxlength: 500,
        required: true,
    },
    images: {
        type: Array,
    },
    tags: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
