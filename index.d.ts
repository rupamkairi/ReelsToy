declare module 'react-native-instagram-reels' {
  import {ComponentType, ReactNode} from 'react';
  import {ViewStyle} from 'react-native';

  export interface Video {
    _id: string;
    uri: string;
  }

  interface ReelsProps {
    videos: Video[];
    backgroundColor?: string;
    headerTitle?: string;
    headerIconName?: string;
    headerIconColor?: string;
    headerIconSize?: number;
    headerIcon?: ReactNode;
    headerComponent?: ReactNode;
    onHeaderIconPress?: () => void;
    optionsComponent?: ReactNode;
    pauseOnOptionsShow?: boolean;
    onSharePress?: (_id: string) => void;
    onCommentPress?: (_id: string) => void;
    onLikePress?: (_id: string) => void;
    onDislikePress?: (_id: string) => void;
    onFinishPlaying?: (_id: string) => void;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    timeElapsedColor?: string;
    totalTimeColor?: string;
    containerStyle?: ViewStyle;
  }

  const Reels: ComponentType<ReelsProps>;

  export default Reels;
}
