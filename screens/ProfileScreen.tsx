import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
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
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scroll}>
                    <View style={styles.content_container}>
                         <UserData name={name} email={email} />
                         <AccountsInfo accounts={accounts} />
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     scroll: {
          flex: 1,
          backgroundColor: '#ffff',
     },
     content_container: {
          width: '100%',
          alignItems: 'center',
          paddingLeft: '5%',
          paddingRight: '5%',
     },
});
