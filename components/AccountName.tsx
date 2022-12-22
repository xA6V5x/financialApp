import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type accountNameProps = {
     accountName: string;
};

export function AccountName({ accountName }: accountNameProps) {
     return (
          <Text
               style={
                    accountName === 'Checking'
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
