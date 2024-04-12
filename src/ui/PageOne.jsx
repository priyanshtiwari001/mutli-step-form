import { Items } from "../components/Items";
import { personalizeData } from "./utils/data";

const PageOne = ({ setPending }) => {
  return (
    <section className="  w-full lg:w-1/2 mx-auto  flex  flex-col items-center px-3">
      {personalizeData[0].map((itemData, i) => {
        const { title, description, item } = itemData;
        return (
          <div key={i}>
            <div key={i} className="  w-full   mx-auto text-center p-3">
              <h1 className="w-full text-3xl   font-semibold tracking-wide">
                {title}
              </h1>
              <p className="text-gray-500 text-sm leading-5">{description}</p>
            </div>

            <div className="w-full lg:w-[540px] h-full flex flex-col gap-3">
              <Items item={item} setPending={setPending} />
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default PageOne;
