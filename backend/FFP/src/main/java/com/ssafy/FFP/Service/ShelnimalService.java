package com.ssafy.FFP.Service;

import java.util.List;

import com.ssafy.FFP.Dto.DatasetDto;
import com.ssafy.FFP.Dto.SearchDto;
import com.ssafy.FFP.Dto.ShelnimalDto;
import org.apache.ibatis.annotations.Param;

public interface ShelnimalService {

    public ShelnimalDto select(int no);
    public List<ShelnimalDto> list(int sdt, int offset);
    public List<ShelnimalDto> match(int userNo);
    public List<DatasetDto> find(SearchDto searchDto);
    public List<DatasetDto> mainList();
    public List<DatasetDto> mainListLogin(String no);
    public List<String> searchList(String kind);
}
