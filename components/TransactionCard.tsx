import { Image, Text, View, StyleSheet } from 'react-native';

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
                    <Text style={styles.text}>
                         {type} ${amount}
                    </Text>
                    {account && <Text>Account {account}</Text>}
                    {fromAccount && <Text>From Account: {fromAccount}</Text>}
                    {fromAccount && <Text>To Account: {toAccount}</Text>}
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
          fontWeight: '500',
     },
});
