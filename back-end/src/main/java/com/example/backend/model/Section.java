package com.example.backend.model;

import java.util.Collection;

public class Section {
    private Object isOnSale;
    private Object isTop;
    private Collection<String> subsectionUuids;
    private String subtitle;
    private String  title;
    private String uuid;

    public Object getIsOnSale() {
        return isOnSale;
    }

    public void setIsOnSale(Object isOnSale) {
        this.isOnSale = isOnSale;
    }

    public Object getIsTop() {
        return isTop;
    }

    public void setIsTop(Object isTop) {
        this.isTop = isTop;
    }

    public Collection<String> getSubsectionUuids() {
        return subsectionUuids;
    }

    public void setSubsectionUuids(Collection<String> subsectionUuids) {
        this.subsectionUuids = subsectionUuids;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
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
}
