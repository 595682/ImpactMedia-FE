const displayEventType = (
  typeString?:
    | 'video'
    | 'animated_video'
    | 'hybrid_event'
    | 'virtual_event'
    | string
    | null
) => {
  switch (typeString) {
    case 'video':
      return 'Video';
    case 'animated_video':
      return 'Animated video';
    case 'hybrid_event':
      return 'Hybrid event';
    case 'virtual_event':
      return 'Virtual event';
    default:
      return null;
  }
};

export default displayEventType;
