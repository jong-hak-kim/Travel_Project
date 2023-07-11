package com.travelproject.travelproject.dto.request.admin.recommendationTouristSpot;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostRecommendationTouristSpotRequestDto {
    @NotBlank
    private String recommendTouristSpotTitle;
    @NotBlank
    private String recommendTouristImageUrl;
    @NotBlank
    private String recommendTouristContent;
    @NotBlank
    private String recommendTouristAddress;
    @NotBlank
    private String recommendTouristUseTime;
    @NotBlank
    private String recommendTouristInformation;
}
