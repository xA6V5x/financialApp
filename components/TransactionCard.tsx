import { Image, Text, View, StyleSheet } from 'react-native';
import { AccountName } from './AccountName';

type transactionCardProps = {
     type: string;
     amount: number;
     account?: string;
     fromAccount?: string;
     toAccount?: string;
};

export function TransactionCard({
     type,
     amount,
     account,
     fromAccount,
     toAccount,
}: transactionCardProps) {
     return (
          <View style={styles.transactions_container}>
               <Image
                    source={
                         type === 'Deposit'
                              ? require('../assets/transactions/received.png')
                              : require('../assets/transactions/send.png')
                    }
                    style={styles.img_transaction}
               />
               <View style={{ backgroundColor: '#ECECEC' }}>
                    <Text style={{ ...styles.text, fontWeight: '500' }}>
                         {type} ${amount}
                    </Text>
                    {account && (
                         <Text style={styles.text}>
                              Account: <AccountName accountName={account} />
                         </Text>
                    )}
                    {fromAccount && (
                         <Text style={styles.text}>
                              From Account: <AccountName accountName={fromAccount} />
                         </Text>
                    )}
                    {toAccount && (
                         <Text style={styles.text}>
                              To Account: <AccountName accountName={toAccount} />
                         </Text>
                    )}
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     transactions_container: {
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
          borderRadius: 10,
          width: '100%',
          backgroundColor: '#ECECEC',
     },
     img_transaction: { margin: 20, width: 35, height: 35 },
     text: {
          fontSize: 15,
     },
});
