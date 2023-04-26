import { MaterialIcons } from "@expo/vector-icons";
import ItemWithRightArrow from 'components/atoms/itemWithRightArrow';
import UserImageWithName from 'components/atoms/userImgWithName';
import BaseView from 'components/base/view';
import CrossLayout from 'components/layouts/crossLayout';
import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { firebaseUserService } from 'services/firebase/user';
import { colors } from 'theme/colors';
import { heightRatio, widthRatio } from 'utils/pixelRatio';

type Props = {}

const UserScreen = (props: Props) => {
  return (
       <CrossLayout>
            <BaseView style={styles.container}>
                 <BaseView>
                      <View style={styles.hr} />
                      <UserImageWithName />
                      <View style={styles.hr} />
                 </BaseView>
                 <ItemWithRightArrow
                      leftIcon={<MaterialIcons name="logout" size={24} color="black" />}
                      isRightArrow={false}
                      title={"Logout"}
                      onPress={firebaseUserService.logoutFirebaseEmail}
                 />
            </BaseView>
       </CrossLayout>
  );
}

export default UserScreen

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     topBar: {
          borderWidth: 1,
          height: heightRatio(10),
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: widthRatio(3),
     },
     hr: {
          width: "100%",
          height: heightRatio(0.1),
          backgroundColor: colors.platinum,
     },
     
});