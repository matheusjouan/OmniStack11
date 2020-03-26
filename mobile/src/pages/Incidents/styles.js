import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image``;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #737380;
  line-height: 24px;
`;

export const IncidentsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 15px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 15px;
  color: #737380;
  font-weight: bold;
`;

export const DetailButton = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailButtonText = styled.Text`
  color: #e02141;
  font-size: 15px;
  font-weight: bold;
`;
