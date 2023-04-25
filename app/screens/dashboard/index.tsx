import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GreenSearchBar from "components/molecules/greenSearchBar";
import MainPageAdView from "components/atoms/mainPageAdView";
import { FlatList } from "native-base";
import FlatListMenu from "components/molecules/flatListMenu";
import BaseView from "components/base/view";
import { colors } from "theme/colors";
import GridSingleItem from "components/ui/gridItem";
import { heightRatio } from "utils/pixelRatio";
import ListSingleItem from "components/ui/listItem";

type Props = {};

const DashboardScreen = (props: Props) => {
     const [isGridStyle, setIsGridStyle] = useState(true);
     return (
          <BaseView style={styles.container}>
               <GreenSearchBar />
               <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                    renderItem={(item) => {
                         return isGridStyle ? (
                              <GridSingleItem item={item} />
                         ) : (
                              <ListSingleItem item={item} />
                         );
                    }}
                    numColumns={isGridStyle ? 2 : 1}
                    key={isGridStyle ? 2 : 1}
                    columnWrapperStyle={isGridStyle ? styles.wrapperStyle : null}
                    data={[1, 2, 3]}
                    ListHeaderComponent={
                         <>
                              <MainPageAdView />
                              <FlatListMenu
                                   isGrid={isGridStyle}
                                   setIsGrid={setIsGridStyle}
                              />
                         </>
                    }
               />
          </BaseView>
     );
};

export default DashboardScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          backgroundColor: colors.grayRGBA,
     },
     flatListContainer: {
          paddingBottom: heightRatio(15),
     },
     wrapperStyle: {
          justifyContent: "space-between",
          marginTop: heightRatio(2),
          paddingHorizontal: 3,
     },
});
