import Materials from "@/app/course/data/materials";

const fetchMaterials = async (slug: any) => {
  const data = await Materials(slug);
  return {
    title: data.topic.title || "",
    slug: data.slug || "",
    content: data.content || "",
    pdf: data.pdf_file ? data.pdf_file : null,
  };
};

export default fetchMaterials;
