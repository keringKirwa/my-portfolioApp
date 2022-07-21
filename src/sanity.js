import imageUrlBuilder from "@sanity/image-url";
import { config } from "./client";

const builder = imageUrlBuilder(config);

export const urlFor = (source) => {
    return builder.image(source);
}
