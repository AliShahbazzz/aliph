import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { processData, Product as ProductInterface, tubeData } from "../data";
import { Grid2 } from "@mui/material";
import { Details, TableComponent } from "../components";

export const ProductDetails: React.FC = () => {
  const [params] = useSearchParams();
  const productType = params?.get("type");
  const productId = Number(params?.get("id"));
  console.log("productType: ", productType);
  console.log("productId: ", productId);

  const [productDetails, setProductDetails] = useState<ProductInterface>();

  useEffect(() => {
    let product;
    switch (productType) {
      case "process":
        product = processData?.[productId];
        setProductDetails({ ...product });
        document.title = product?.name;
        break;
      case "tube":
        product = tubeData?.[productId];
        setProductDetails({ ...product });
        document.title = product?.name;
        // setProductDetails({});
        break;
      case "material":
        // product = processData?.[productId];
        // setProductDetails({ ...product });
        // setProductDetails({});
        break;
      default:
        return;
    }
  }, [productType, productId]);

  console.log(productDetails);

  return (
    <div>
      <Grid2 container spacing={5}>
        <Grid2 size={6}>
          <img
            src={productDetails?.img}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid2>
        <Grid2 size={6}>
          <h1>{productDetails?.name}</h1>
          <span>{productDetails?.description}</span>
        </Grid2>
      </Grid2>
      <Grid2>
        <TableComponent />
        <Details />
      </Grid2>
    </div>
  );
};
