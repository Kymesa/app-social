import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import React, { useContext, useEffect, useState } from "react";
import ProductsData from "./productsData";
import ProductCard from "./ProductCard";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import ProductModalDetails from "./ProductSelectDetail.jsx.jsx";
import ProductsCarts from "./ProductsCarts";
import { AppSocialContext } from "../contexts/AppSocialContext";
const categoriesList = [
  "Smartphones",
  "Laptops",
  "watchs",
  "Smart Watch",
  "Apple",
  "Cars",
];
const HomeProducts = () => {
  const [selectCategories, setSelectCategories] = useState(categoriesList[0]);
  const [listDataCategories, setListDataCategories] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [productSelectModal, setProductSeleteModal] = useState(null);
  const [cardProducts, setCardProducts] = useState([]);
  const [modalCart, setModalCart, countCart, setCountCart] =
    useContext(AppSocialContext);
  const [sumTotals, setSumTotals] = useState(0);

  useEffect(() => {
    const filterSelect = () => {
      const filterProducts = ProductsData.filter(
        (p) => p.categoty == selectCategories
      );

      setListDataCategories(filterProducts);
    };
    filterSelect();
  }, [selectCategories]);

  const eventProductSelect = (item) => {
    setModalVisible(true);
    setProductSeleteModal(item);
  };

  useEffect(() => {
    const sumTotal = cardProducts.reduce((a, b) => a + b.price, 0);
    setSumTotals(sumTotal);
  }, [cardProducts]);

  const handleCartAddProduct = (productAddCard) => {
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: productAddCard.name,
      textBody: "Producto agregado al carrito, Con exito!",
      button: "close",
      autoClose: 8000,
    });
    setTimeout(() => {
      setCardProducts([...cardProducts, productAddCard]);
      setModalVisible(!isModalVisible);
      setCountCart(countCart + 1);
    }, 900);
  };
  const handleClearCard = () => {
    setCardProducts([]);
    setCountCart(0);
  };

  return (
    <>
      <View style={{ marginTop: 18 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categoriesList}
          key={(categoriesList) => categoriesList}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPressIn={() => setSelectCategories(item)}>
              <View
                style={{
                  backgroundColor:
                    selectCategories == item ? "#0D1F2D" : "#F6F6F8",
                  padding: 9,
                  marginRight: 12,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: selectCategories == item ? "white" : "black",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {listDataCategories && (
        <View style={{ width: wp(92) }}>
          <FlatList
            data={listDataCategories}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            key={(listDataCategories) => listDataCategories.id}
            renderItem={({ item }) => (
              <ProductCard product={item} eventProduct={eventProductSelect} />
            )}
          />
        </View>
      )}

      {productSelectModal ? (
        <ProductModalDetails
          productSelectModal={productSelectModal}
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          handleCartAddProduct={handleCartAddProduct}
        />
      ) : null}

      <ProductsCarts
        modalCart={modalCart}
        setModalCart={setModalCart}
        cardProducts={cardProducts}
        handleClearCard={handleClearCard}
        sumTotals={sumTotals}
      />
    </>
  );
};

export default HomeProducts;
