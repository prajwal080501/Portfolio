import { createClient, groq } from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.REACT_APP_SANITY_DATASET || "production",
    projectId: "o1tyv4ex",
    apiVersion: "2022-11-15",
    useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config)
const builder = imageUrlBuilder(sanityClient)


export const urlFor = (source) => {
    return builder.image(source)
}
