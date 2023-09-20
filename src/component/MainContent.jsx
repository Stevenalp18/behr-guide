import { paintData } from "../data/data";

const MainContent = () => {
  const twentyPercentDiscount = (price, discount) => {
    const discountTotal = price * (discount / 100);
    const totalNewPrice = price - discountTotal;
    return totalNewPrice.toFixed(2);
  };

  const renderData = paintData.map((product) => {
    return (
      <>
        <div className="lg:w-2/3 m-auto mt-6" key={product.id}>
          <div className="bg-[#EFF0EC] rounded-xl py-3">
            <div className="text-center text-2xl mb-2">
              {product.productName}
            </div>
            <div className="flex flex-col p-2">
              <div className="">
                <img
                  src={product.image.url}
                  alt={product.image.alt}
                  className="w-28 m-auto"
                />
              </div>
              <div>
                <div className="text-center">
                  <p className="underline mb-2 text-lg">FEATURES</p>
                  <p>{product.features}</p>
                  <div className="flex gap-3 justify-center p-1">
                    <a
                      href={
                        "https://www.behr.com/consumer/products/safety-msds"
                      }
                      target="_blank"
                      className="bg-[#E4E7E0] px-2 py-1 rounded-xl"
                    >
                      SDS / Product Data / MSDS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="text-center text-lg mb-2">
                Retail List Price (Gal/5Gal):
              </div>
              <ul className="flex m-auto text-center">
                <li className="w-1/4">
                  <p className="underline">Flat/Matte</p>
                  <p>${product.retailPrice.gallon.flatMatte.toFixed(2)}</p>
                  <p>${product.retailPrice.bucket.flatMatte.toFixed(2)}</p>
                </li>
                <li className="w-1/4">
                  <p className="underline">Eggshell</p>
                  <div className="w-2/3 m-auto">
                    <p>${product.retailPrice.gallon.eggshell.toFixed(2)}</p>
                    <p>${product.retailPrice.bucket.eggshell.toFixed(2)}</p>
                  </div>
                </li>
                <li className="w-1/4">
                  <p className="underline">Satin</p>
                  <p>${product.retailPrice.gallon.satin.toFixed(2)}</p>
                  <p>${product.retailPrice.bucket.satin.toFixed(2)}</p>
                </li>
                <li className="w-1/4">
                  <p className="underline">Semigloss</p>
                  <p>${product.retailPrice.gallon.semigloss.toFixed(2)}</p>
                  <p>${product.retailPrice.bucket.semigloss.toFixed(2)}</p>
                </li>
              </ul>
            </div>
            <div className="p-2">
              <div className="text-center text-lg mb-2">
                Contractor Price (Gal/5Gal):
              </div>
              <ul className="flex m-auto text-center">
                <li className="w-1/4">
                  <p className="underline">Flat/Matte</p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.gallon.flatMatte.toFixed(2),
                      20
                    )}
                  </p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.bucket.flatMatte.toFixed(2),
                      20
                    )}
                  </p>
                </li>
                <li className="w-1/4">
                  <p className="underline">Eggshell</p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.gallon.eggshell.toFixed(2),
                      20
                    )}
                  </p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.bucket.eggshell.toFixed(2),
                      20
                    )}
                  </p>
                </li>
                <li className="w-1/4">
                  <p className="underline">Satin</p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.gallon.satin.toFixed(2),
                      20
                    )}
                  </p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.bucket.satin.toFixed(2),
                      20
                    )}
                  </p>
                </li>
                <li className="w-1/4">
                  <p className="underline">Semigloss</p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.gallon.semigloss.toFixed(2),
                      20
                    )}
                  </p>
                  <p>
                    $
                    {twentyPercentDiscount(
                      product.retailPrice.bucket.semigloss.toFixed(2),
                      20
                    )}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      {renderData}
      {/* <div className="lg:w-2/3 m-auto mt-6">
        <div className="bg-[#EFF0EC] rounded-xl py-3">
          <div className="text-center text-2xl mb-2">Premium Plus Interior</div>
          <div className="flex flex-col lg:flex-row p-2">
            <div className="lg:w-1/4">
              <img
                src="https://www.behr.com/binaries/content/gallery/behrbrxm/products/product-can-images-2021/interior-paint-and-primer/behr-premium-plus/1050_01_us_web.png"
                alt="Premium Plus Image"
                className="w-28 m-auto"
              />
            </div>
            <div>
              <div className="text-center">
                <p className="underline mb-2 text-lg">FEATURES</p>
                <p>
                  Excellent Hide/Excellent Coverage Stain Resistant Scrub
                  Resistant GREENGUARD® GOLD Certified* Low Odor
                </p>
                <div className="flex gap-3 justify-center p-1">
                  <a
                    href={"https://www.behr.com/consumer/products/safety-msds"}
                    target="_blank"
                    className="bg-[#E4E7E0] px-2 py-1 rounded-xl"
                  >
                    SDS / Product Data / MSDS
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="text-center text-lg mb-2">
              Retail List Price (Gal/5Gal):
            </div>
            <ul className="flex m-auto text-center">
              <li className="w-1/4">
                <p className="underline">Flat/Matte</p>
                <p>$28.98</p>
                <p>$130.00</p>
              </li>
              <li className="w-1/4">
                <p className="underline">Eggshell</p>
                <div className="w-2/3 m-auto">
                  <p>$31.98</p>
                  <p>$143.00</p>
                </div>
              </li>
              <li className="w-1/4">
                <p className="underline">Satin</p>
                <p>$34.98</p>
                <p>$157.00</p>
              </li>
              <li className="w-1/4">
                <p className="underline">Semigloss</p>
                <p>$37.98</p>
                <p>$171.00</p>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <div className="text-center text-lg mb-2">
              Contractor Price (Gal/5Gal):
            </div>
            <ul className="flex m-auto text-center">
              <li className="w-1/4">
                <p className="underline">Flat/Matte</p>
                <p>$28.98</p>
                <p>$130.00</p>
              </li>
              <li className="w-1/4">
                <p className="underline">Eggshell</p>
                <p>$31.98</p>
                <p>$143.00</p>
              </li>
              <li className="w-1/4">
                <p className="underline">Satin</p>
                <p>$34.98</p>
                <p>$157.00</p>
              </li>
              <li className="w-1/4">
                <p className="underline">Semigloss</p>
                <p>$37.98</p>
                <p>$171.00</p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MainContent;
