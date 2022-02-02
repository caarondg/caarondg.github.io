export default interface WorkDataProps {
  id: number;
  name: string;
  description?: string;
  contribution?: string;
  images: {
    desktop: string,
    mobile: string,
  };
  technology: string[];
}
