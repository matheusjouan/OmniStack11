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

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 15px;
  margin-top: 48px;
`;

export const IncidentPropertyFirst = styled.Text`
  margin-top: 0;
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentProperty = styled.Text`
  margin-top: 24px;
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
  font-weight: bold;
`;

export const ProfileButton = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 15px;
  margin-top: 20px;
`;

export const HeroTitle = styled.Text`
  font-size: 20px;
  color: #13131a;
  font-weight: bold;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled(RectButton)`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;
