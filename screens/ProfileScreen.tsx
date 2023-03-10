import { StyleSheet } from 'react-native';
import { View, ScrollView } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import dataTest from '../dataTest.json';
import { UserData } from '../components/UserData';
import { AccountsInfo } from '../components/AccountsInfo';

type userProps = {
     name: string;
     email: string;
     accounts: {
          type: string;
          balance: number;
     }[];
};

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {
     const { name, email, accounts }: userProps = dataTest.user;

     return (
          <ScrollView style={styles.scroll}>
               <View style={styles.content_container}>
                    <UserData name={name} email={email} />
                    <AccountsInfo accounts={accounts} />
               </View>
          </ScrollView>
     );
}

const styles = StyleSheet.create({
     scroll: {
          flex: 1,
     },
     content_container: {
          width: '100%',
          alignItems: 'center',
          paddingLeft: '5%',
          paddingRight: '5%',
     },
});
