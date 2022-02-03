export default interface WorkDataProps {
  id: number;
  name: string;
  description?: string;
  contribution?: string;
  images: {
    base: string,
    mock: string,
    preview: string,
  };
  technology: string[];
  url: string;
}
