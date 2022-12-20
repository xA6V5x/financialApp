import { SafeAreaView, ScrollView } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import dataTest from '../dataTest.json';

export default function TransactionsScreen({ navigation }: RootTabScreenProps<'Transactions'>) {
     const { transactions } = dataTest;

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scroll}>
                    <View style={styles.content_container}>
                         {transactions.map((data, index) => {
                              return (
                                   <View key={index} style={styles.transactions_container}>
                                        <Image
                                             source={
                                                  data.type === 'Deposit'
                                                       ? require('../assets/transactions/received.png')
                                                       : data.type === 'Transfer'
                                                       ? require('../assets/transactions/internal.png')
                                                       : require('../assets/transactions/send.png')
                                             }
                                             style={
                                                  data.type === 'transaction'
                                                       ? {
                                                              ...styles.img_transaction,
                                                              borderRadius: '50%',
                                                         }
                                                       : styles.img_transaction
                                             }
                                        />
                                        <View style={{ backgroundColor: '#ECECEC' }}>
                                             <Text style={styles.text}>
                                                  {data.type} ${data.amount}
                                             </Text>
                                             {data.account && <Text>Account: {data.account}</Text>}
                                             {data.fromAccount && (
                                                  <Text>From Account: {data.fromAccount}</Text>
                                             )}
                                             {data.fromAccount && (
                                                  <Text>To Account: {data.toAccount}</Text>
                                             )}
                                        </View>
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
     accounts_titles_container: {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     title: {
          fontSize: 18,
          fontWeight: '500',
     },
     transactions_container: {
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
          borderRadius: 10,
          width: '100%',
          backgroundColor: '#ECECEC',
     },
     img_transaction: { margin: 15, width: 35, height: 35 },
     text: {
          fontSize: 15,
          fontWeight: '500',
     },
});
