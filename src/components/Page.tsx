import React, { PropsWithChildren } from 'react';
import { StatusBar, SafeAreaView, useColorScheme, StyleSheet } from 'react-native';

export interface PageProps extends PropsWithChildren {
  statusBarType?: 'light' | 'dark';
  style?: Record<string, any>
}

export const Page = ({ statusBarType, children, style = {} }: PageProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const statusBarStyle = isDarkMode || statusBarType === 'light' ? 'light-content' : 'dark-content';

  return (
    <SafeAreaView style={{ ...styles.default, ...style }}>
      <StatusBar barStyle={statusBarStyle} />
      {children}
    </SafeAreaView>
  );
};

export const CenteredPage = ({ statusBarType, children, style = {} }: PageProps) => {
  return (
    <Page statusBarType={statusBarType} style={{ ...styles.centered, ...style }}>
      {children}
    </Page>
  );
};

const styles = StyleSheet.create({
  default: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 10
  },
  centered: {
    alignItems: 'center'
  }
});

export default Page;
