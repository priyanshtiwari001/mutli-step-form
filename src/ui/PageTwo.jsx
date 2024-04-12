import { Items } from "../components/Items";
import { personalizeData } from "./utils/data";

const PageTwo = ({ setPending }) => {
  return (
    <section className="  w-full lg:w-1/2 mx-auto  flex  flex-col gap-6 items-center p-3">
      {personalizeData[1].map((itemData, i) => {
        const { title, description, item } = itemData;
        return (
          <div key={i}>
            <div key={i} className="  w-full   mx-auto text-center p-3">
              <h1 className="w-full text-3xl   font-semibold tracking-wide">
                {title}
              </h1>
              <p className="text-gray-500 text-sm py-2 leading-5">
                {description}
              </p>
            </div>

            <div className="w-full  h-full flex flex-col gap-3">
              <Items item={item} setPending={setPending} />
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default PageTwo;
