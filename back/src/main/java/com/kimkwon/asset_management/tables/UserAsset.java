package com.kimkwon.asset_management.tables;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserAsset {

    @Id
    Long id;

    Long date;

    Long amount;

    Long toAmount;


}
