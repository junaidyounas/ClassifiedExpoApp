import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { heightRatio, widthRatio } from "utils/pixelRatio";
import BaseView from "components/base/view";
import GridItemDetailView from "./detailView";
import BaseImage from "components/base/image";
import ListItemDetailView from "./detailView";

type Props = {
     item?: any;
     index?: any;
};

const ListSingleItem = (props: Props) => {
     const { item, index } = props;
     return (
          <BaseView shadow={2} key={index} style={styles.container}>
               <BaseImage borderRadius={widthRatio(3)} width={widthRatio(28)} height={widthRatio(28)} />
                    <ListItemDetailView />
          </BaseView>
     );
};

export default ListSingleItem;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          maxWidth: widthRatio(91),
          borderRadius: widthRatio(3),
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: heightRatio(1.5)
     },
     bottomView: {
          borderRadius: widthRatio(3),
     },
});
