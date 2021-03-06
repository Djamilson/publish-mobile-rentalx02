import React from 'react';

import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

export function LoadingComponent() {
  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator
        style={{ opacity: 1, marginTop: 50 }}
        color={theme.colors.shape}
        size="large"
      />
      <Title>Aguarde...</Title>
    </Container>
  );
}
