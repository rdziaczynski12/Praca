package com.example.backend.model;

import java.util.Collection;
import java.util.List;

public class Data {

    private Collection<String> categories;
    private Object  isOpen;
    private Object location; //rozwinac
    private String phoneNumber;
    private String title;
    private String uuid;
    private Collection<Section> sections;
    private Object sectionEntitiesMap; //dania!!

    private Object singleUseItemsInfo;
    private int cityId;
    private String citySlug;
    private String closedMessage;
    private String currencyCode;
    private String slug;
    private String priceBucket;
    private Object disableCheckoutInstruction;
    private Object disableOrderInstruction;
    private Object isDeliveryBandwagon;
    private Object isDeliveryOverTheTop;
    private Object isDeliveryThirdParty;
    private Object isFavorite;
    private Object isPreview;
    private Object isWithinDeliveryRange;
    private Object shouldIndex;
    private List<String> cuisineList;
    private Object disclaimerBadge;
    private Object distanceBadge;
    private Object etaRange;
    private Object fareBadge;
    private Object fareInfo;
    private Object nuggets;
    private Object pinnedInfo;
    private Object promoTrackings;
    private Object promotion;
    private Object ratingBadge;
    private Object metaJson;
    private Object supportedDiningModes;
    private Object suggestedPromotion;
    private Object heroImageUrls;
    private Object hours;
    private Object subsectionsMap;

    public Object getSectionEntitiesMap() {
        return sectionEntitiesMap;
    }

    public void setSectionEntitiesMap(Object sectionEntitiesMap) {
        this.sectionEntitiesMap = sectionEntitiesMap;
    }

    public Object getMetaJson() {
        return metaJson;
    }

    public void setMetaJson(Object metaJson) {
        this.metaJson = metaJson;
    }

    public Object getSingleUseItemsInfo() {
        return singleUseItemsInfo;
    }

    public void setSingleUseItemsInfo(Object singleUseItemsInfo) {
        this.singleUseItemsInfo = singleUseItemsInfo;
    }

    public Collection<String> getCategories() {
        return categories;
    }

    public void setCategories(Collection<String> categories) {
        this.categories = categories;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public String getCitySlug() {
        return citySlug;
    }

    public void setCitySlug(String citySlug) {
        this.citySlug = citySlug;
    }

    public String getClosedMessage() {
        return closedMessage;
    }

    public void setClosedMessage(String closedMessage) {
        this.closedMessage = closedMessage;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getPriceBucket() {
        return priceBucket;
    }

    public void setPriceBucket(String priceBucket) {
        this.priceBucket = priceBucket;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public Object getDisableCheckoutInstruction() {
        return disableCheckoutInstruction;
    }

    public void setDisableCheckoutInstruction(Object disableCheckoutInstruction) {
        this.disableCheckoutInstruction = disableCheckoutInstruction;
    }

    public Object getDisableOrderInstruction() {
        return disableOrderInstruction;
    }

    public void setDisableOrderInstruction(Object disableOrderInstruction) {
        this.disableOrderInstruction = disableOrderInstruction;
    }

    public Object getIsDeliveryBandwagon() {
        return isDeliveryBandwagon;
    }

    public void setIsDeliveryBandwagon(Object isDeliveryBandwagon) {
        this.isDeliveryBandwagon = isDeliveryBandwagon;
    }

    public Object getIsDeliveryOverTheTop() {
        return isDeliveryOverTheTop;
    }

    public void setIsDeliveryOverTheTop(Object isDeliveryOverTheTop) {
        this.isDeliveryOverTheTop = isDeliveryOverTheTop;
    }

    public Object getIsDeliveryThirdParty() {
        return isDeliveryThirdParty;
    }

    public void setIsDeliveryThirdParty(Object isDeliveryThirdParty) {
        this.isDeliveryThirdParty = isDeliveryThirdParty;
    }

    public Object getIsFavorite() {
        return isFavorite;
    }

    public void setIsFavorite(Object isFavorite) {
        this.isFavorite = isFavorite;
    }

    public Object getIsOpen() {
        return isOpen;
    }

    public void setIsOpen(Object isOpen) {
        this.isOpen = isOpen;
    }

    public Object getIsPreview() {
        return isPreview;
    }

    public void setIsPreview(Object isPreview) {
        this.isPreview = isPreview;
    }

    public Object getIsWithinDeliveryRange() {
        return isWithinDeliveryRange;
    }

    public void setIsWithinDeliveryRange(Object isWithinDeliveryRange) {
        this.isWithinDeliveryRange = isWithinDeliveryRange;
    }

    public Object getShouldIndex() {
        return shouldIndex;
    }

    public void setShouldIndex(Object shouldIndex) {
        this.shouldIndex = shouldIndex;
    }

    public List<String> getCuisineList() {
        return cuisineList;
    }

    public void setCuisineList(List<String> cuisineList) {
        this.cuisineList = cuisineList;
    }

    public Object getDisclaimerBadge() {
        return disclaimerBadge;
    }

    public void setDisclaimerBadge(Object disclaimerBadge) {
        this.disclaimerBadge = disclaimerBadge;
    }

    public Object getDistanceBadge() {
        return distanceBadge;
    }

    public void setDistanceBadge(Object distanceBadge) {
        this.distanceBadge = distanceBadge;
    }

    public Object getEtaRange() {
        return etaRange;
    }

    public void setEtaRange(Object etaRange) {
        this.etaRange = etaRange;
    }

    public Object getFareBadge() {
        return fareBadge;
    }

    public void setFareBadge(Object fareBadge) {
        this.fareBadge = fareBadge;
    }

    public Object getFareInfo() {
        return fareInfo;
    }

    public void setFareInfo(Object fareInfo) {
        this.fareInfo = fareInfo;
    }

    public Object getNuggets() {
        return nuggets;
    }

    public void setNuggets(Object nuggets) {
        this.nuggets = nuggets;
    }

    public Object getPinnedInfo() {
        return pinnedInfo;
    }

    public void setPinnedInfo(Object pinnedInfo) {
        this.pinnedInfo = pinnedInfo;
    }

    public Object getPromoTrackings() {
        return promoTrackings;
    }

    public void setPromoTrackings(Object promoTrackings) {
        this.promoTrackings = promoTrackings;
    }

    public Object getPromotion() {
        return promotion;
    }

    public void setPromotion(Object promotion) {
        this.promotion = promotion;
    }

    public Object getRatingBadge() {
        return ratingBadge;
    }

    public void setRatingBadge(Object ratingBadge) {
        this.ratingBadge = ratingBadge;
    }

    public Object getSupportedDiningModes() {
        return supportedDiningModes;
    }

    public void setSupportedDiningModes(Object supportedDiningModes) {
        this.supportedDiningModes = supportedDiningModes;
    }

    public Object getSuggestedPromotion() {
        return suggestedPromotion;
    }

    public void setSuggestedPromotion(Object suggestedPromotion) {
        this.suggestedPromotion = suggestedPromotion;
    }

    public Object getHeroImageUrls() {
        return heroImageUrls;
    }

    public void setHeroImageUrls(Object heroImageUrls) {
        this.heroImageUrls = heroImageUrls;
    }

    public Object getHours() {
        return hours;
    }

    public void setHours(Object hours) {
        this.hours = hours;
    }

    public Object getLocation() {
        return location;
    }

    public void setLocation(Object location) {
        this.location = location;
    }

    public Collection<Section> getSections() {
        return sections;
    }

    public void setSections(Collection<Section> sections) {
        this.sections = sections;
    }

    public Object getSubsectionsMap() {
        return subsectionsMap;
    }

    public void setSubsectionsMap(Object subsectionsMap) {
        this.subsectionsMap = subsectionsMap;
    }
}