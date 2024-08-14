// changes made in below code :- added variable sorttype and added div element above h1 tag
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Button, Alert } from "react-bootstrap";
// import PurchaseSeeds from "../../components/PurchaseSeeds/PurchaseSeeds";
// import "./Farmer_ProductSeedStyles.css";

// import Message from "./../../components/Message/Message";
// import Loader from "./../../components/Loader/Loader";

// import { listSeedProducts } from "./../../actions/productSeedActions";
// import Meta from "../../components/Helmet/Meta";
// let sortType;
// const Farmer_ProductSeedScreen = () => {
//   const dispatch = useDispatch();

// //   const prodcutSeedList = useSelector((state) => state.prodcutSeedList);
// const prodcutSeedList = useSelector((state) => {
//     const { loading, error, productSeeds } = state.prodcutSeedList;
//     const sortedProductSeeds = [...productSeeds].sort((a, b) => b.rating - a.rating);
//     return { loading, error, productSeeds: sortedProductSeeds };
//   });
//   const { loading, error, productSeeds } = prodcutSeedList;

//   const [numberOfItems, setNumberOfItems] = useState(3);

//   useEffect(() => {
//     dispatch(listSeedProducts());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch]);

//   const showMore = () => {
//     if (numberOfItems + 3 <= productSeeds.length) {
//       setNumberOfItems(numberOfItems + 3);
//     } else {
//       setNumberOfItems(productSeeds.length);
//     }
//   };

//   return (
//     <div className="ProductSeedScreen">
//       <Meta title="HarvestBridge | Farmer Seeds" />
//       <Container>

//       <div className="d-flex justify-content-end mb-3">
//   <label htmlFor="sort-select" className="me-2">
//     Sort by:
//   </label>
//   <select
//     id="sort-select"
//     className="form-select w-auto"
//     onChange={(e) => {
//       const sortType = e.target.value;
//       const sortedProductSeeds = [...productSeeds].sort((a, b) => {
//         if (sortType === "rating") {
//           return b.rating - a.rating;
//         } else if (sortType === "review") {
//           return b.numReviews - a.numReviews;
//         } else {
//           return 0;
//         }
//       });
//       dispatch({
//         type: "PRODUCT_SEED_LIST_SUCCESS",
//         payload: sortedProductSeeds,
//       });
//     }}
//   >
//     <option value="rating">Rating</option>
//     <option value="review">Number of Reviews</option>
//   </select>
//   <Button
//     className="ms-2"
//     variant="success outline-dark"
//     onClick={() => {
//       const sortedProductSeeds = [...productSeeds].sort((a, b) => {
//         if (sortType === "rating") {
//           return b.rating - a.rating;
//         } else if (sortType === "review") {
//           return b.numReviews - a.numReviews;
//         } else {
//           return 0;
//         }
//       });
//       dispatch({
//         type: "PRODUCT_SEED_LIST_SUCCESS",
//         payload: sortedProductSeeds,
//       });
//     }}
//   >
//     Sort
//   </Button>
// </div>


//         <h1 className="p-3" style={{ textAlign: "center" }}>
//           Latest Seeds
//         </h1>
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant="danger">{error}</Message>
//         ) : (
//           <Row>
//             {productSeeds.slice(0, numberOfItems).map((seed) => (
//               <PurchaseSeeds
//                 key={seed._id}
//                 _id={seed._id}
//                 name={seed.name}
//                 image={seed.image}
//                 rating={seed.rating}
//                 reviews={seed.numReviews}
//                 price={seed.price}
//               />
//             ))}
//             {numberOfItems >= productSeeds.length ? (
//               <Alert
//                 style={{ backgroundColor: "red" }}
//                 className="col-md-12 text-center"
//               >
//                 Finished
//               </Alert>
//             ) : (
//               ""
//             )}
//             <Button
//               className="col-md-12 text-center"
//               variant="success outline-dark"
//               onClick={showMore}
//             >
//               Show more
//             </Button>
//           </Row>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default Farmer_ProductSeedScreen;



import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Button, Alert } from "react-bootstrap";
import PurchaseSeeds from "../../components/PurchaseSeeds/PurchaseSeeds";
import "./Farmer_ProductSeedStyles.css";

import Message from "./../../components/Message/Message";
import Loader from "./../../components/Loader/Loader";

import { listSeedProducts } from "./../../actions/productSeedActions";
import Meta from "../../components/Helmet/Meta";

const Farmer_ProductSeedScreen = () => {
  const dispatch = useDispatch();

  const [sortType, setSortType] = useState("rating");
  const [numberOfItems, setNumberOfItems] = useState(6);

  useEffect(() => {
    dispatch(listSeedProducts());
  }, [dispatch]);

  const prodcutSeedList = useSelector((state) => {
    const { loading, error, productSeeds } = state.prodcutSeedList;
    const sortedProductSeeds = [...productSeeds].sort((a, b) => {
      if (sortType === "rating") {
        return b.rating - a.rating;
      } else if (sortType === "review") {
        return b.numReviews - a.numReviews;
      } else if (sortType === "price") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });
    return { loading, error, productSeeds: sortedProductSeeds };
  });

  const { loading, error, productSeeds } = prodcutSeedList;

  const showMore = () => {
    if (numberOfItems + 3 <= productSeeds.length) {
      setNumberOfItems(numberOfItems + 3);
    } else {
      setNumberOfItems(productSeeds.length);
    }
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="ProductSeedScreen">
      <Meta title="HarvestBridge | Farmer Seeds" />
      <Container>
        <div className="d-flex justify-content-end mb-3">
          <label htmlFor="sort-select" className="me-2">
            Sort by:
          </label>
          <select
            id="sort-select"
            className="form-select w-auto"
            onChange={handleSortChange}
          >
            <option value="rating">Rating</option>
            <option value="review">Number of Reviews</option>
            <option value="price">Price</option>

          </select>
          <Button
            className="ms-2"
            variant="success outline-dark"
            onClick={() => {
              const sortedProductSeeds = [...productSeeds].sort((a, b) => {
                if (sortType === "rating") {
                  return b.rating - a.rating;
                } else if (sortType === "review") {
                  return b.numReviews - a.numReviews;
                } else if (sortType === "price") {
                  return a.price - b.price;
                } else {
                  return 0;
                }
              });
              dispatch({
                type: "PRODUCT_SEED_LIST_SUCCESS",
                payload: sortedProductSeeds,
              });
            }}
          >
            Sort
          </Button>
        </div>

        <h1 className="p-3" style={{ textAlign: "center" }}>
          Latest Seeds
        </h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {productSeeds.slice(0, numberOfItems).map((seed) => (
              <PurchaseSeeds
                key={seed._id}
                _id={seed._id}
                name={seed.name}
                image={seed.image}
                rating={seed.rating}
                reviews={seed.numReviews}
                price={seed.price}
              />
            ))}
            {numberOfItems >= productSeeds.length ? (
              <Alert
                style={{ backgroundColor: "red" }}
                className="col-md-12 text-center"
              >
                Finished
              </Alert>
            ) : (
              ""
            )}
            <Button
              className="col-md-12 text-center"
              variant="success outline-dark"
              onClick={showMore}
            >
              Show more
            </Button>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Farmer_ProductSeedScreen;
