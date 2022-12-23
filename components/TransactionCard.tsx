import { Image, View, StyleSheet } from 'react-native';
import { TransactionInfo } from './TransactionInfo';

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
               <TransactionInfo
                    type={type}
                    amount={amount}
                    account={account}
                    fromAccount={fromAccount}
                    toAccount={toAccount}
               />
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
});
