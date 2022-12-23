import { Text, View, StyleSheet } from 'react-native';
import { AccountName } from './AccountName';

type TransactionInfoProps = {
     type: string;
     amount: number;
     account?: string;
     fromAccount?: string;
     toAccount?: string;
};

export function TransactionInfo({
     type,
     amount,
     account,
     fromAccount,
     toAccount,
}: TransactionInfoProps) {
     return (
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
     );
}

const styles = StyleSheet.create({
     text: {
          fontSize: 15,
     },
});
