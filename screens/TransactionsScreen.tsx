import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { TransactionCard } from '../components/TransactionCard';
import dataTest from '../dataTest.json';

export default function TransactionsScreen({ navigation }: RootTabScreenProps<'Transactions'>) {
     const { transactions } = dataTest;

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scroll}>
                    <View style={styles.content_container}>
                         {transactions.map((data, index) => {
                              return (
                                   <TransactionCard
                                        type={data.type}
                                        amount={data.amount}
                                        account={data.account}
                                        fromAccount={data.fromAccount}
                                        toAccount={data.toAccount}
                                   />
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
});
