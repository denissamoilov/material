import React from 'react';

const PromotionsContext = React.createContext();

export const PromotionsProvider = PromotionsContext.Provider;
export const PromotionsConsumer = PromotionsContext.Consumer;