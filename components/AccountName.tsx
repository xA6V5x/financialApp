import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type AccountNameProps = {
     accountName: string;
};

export function AccountName({ accountName }: AccountNameProps) {
     return (
          <Text
               style={
                    accountName === 'Checking'
                         ? {
                                ...styles.accounts_text,
                                color: '#3d8ed4',
                           }
                         : accountName === 'Savings'
                         ? {
                                ...styles.accounts_text,
                                color: '#3dd456',
                           }
                         : styles.accounts_text
               }
          >
               {accountName}
          </Text>
     );
}

const styles = StyleSheet.create({
     accounts_text: {
          paddingTop: 10,
          fontSize: 16,
     },
});
