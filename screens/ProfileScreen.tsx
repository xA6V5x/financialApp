import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import dataTest from '../dataTest.json';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {
     const { user } = dataTest;

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scroll}>
                    <View style={styles.content_container}>
                         <View style={styles.user_container}>
                              <Text style={styles.user_data}>{user.name}</Text>
                              <Text style={styles.user_data}>{user.email}</Text>
                         </View>
                         <View style={styles.accounts_titles}>
                              <Text style={styles.title}>Balance</Text>
                              <Text style={styles.title}>Type</Text>
                         </View>
                         {user.accounts.map((data) => {
                              return (
                                   <View key={data.balance} style={styles.user_accounts}>
                                        <Text style={styles.accounts_text}>{data.balance}</Text>
                                        <Text
                                             style={
                                                  data.type === 'checking'
                                                       ? {
                                                              ...styles.accounts_text,
                                                              color: '#3d8ed4',
                                                         }
                                                       : {
                                                              ...styles.accounts_text,
                                                              color: '#3dd456',
                                                         }
                                             }
                                        >
                                             {data.type}
                                        </Text>
                                   </View>
                              );
                         })}
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
     user_container: {
          width: '100%',
          marginTop: 5,
          marginBottom: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
     },
     user_data: { fontSize: 20, fontWeight: '500' },
     accounts_titles: {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     title: {
          fontSize: 18,
          fontWeight: '500',
     },
     user_accounts: {
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
     },
     accounts_text: {
          paddingTop: 10,
          fontSize: 16,
     },
});
