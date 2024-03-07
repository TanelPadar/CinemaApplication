package com.example.cinema.form;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieSearchForm {
    private String genre;
    private Integer ageLimit;
    private String language;

}
