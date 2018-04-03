package ca.bc.gov.jag.shuber.persistence.model;

import ca.bc.gov.jag.shuber.persistence.AbstractAuditableVersionable;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import org.hibernate.annotations.GenericGenerator;

/**
 * Region generated by Hibernate Tools hbm2java.
 *
 * <p>Domain model for database table region.
 *
 * @author hbm2java
 * @version 391
 */
@Entity
@Table(name = "region"
    // ,schema="shersched"
)
public class Region extends AbstractAuditableVersionable implements Serializable {

    /** UID. */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "region_id", nullable = false, updatable = false)
    private UUID regionId;

    @NotEmpty
    @Size(min = 1, max = 12)
    @Column(name = "region_cd", unique = true, nullable = false, length = 12)
    private String regionCd;

    @NotEmpty
    @Size(min = 1, max = 100)
    @Column(name = "region_name", nullable = false, length = 100)
    private String regionName;

    @Column(name = "location")
    private UUID location;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "region")
    private List<Courthouse> courthouses = new ArrayList<Courthouse>(0);
    
    /** No args constructor. */
    public Region() {}

    /** Required args constructor. */
    public Region(
            UUID regionId,
            String regionCd,
            String regionName,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount) {
        this.regionId = regionId;
        this.regionCd = regionCd;
        this.regionName = regionName;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
    }

    /** All args constructor. */
    public Region(
            UUID regionId,
            String regionCd,
            String regionName,
            UUID location,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount,
            List<Courthouse> courthouses) {
        this.regionId = regionId;
        this.regionCd = regionCd;
        this.regionName = regionName;
        this.location = location;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
        this.courthouses = courthouses;
    }

    public UUID getRegionId() {
        return this.regionId;
    }

    public void setRegionId(UUID regionId) {
        this.regionId = regionId;
    }

    public String getRegionCd() {
        return this.regionCd;
    }

    public void setRegionCd(String regionCd) {
        this.regionCd = regionCd;
    }

    public String getRegionName() {
        return this.regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }

    public UUID getLocation() {
        return this.location;
    }

    public void setLocation(UUID location) {
        this.location = location;
    }

    public List<Courthouse> getCourthouses() {
        return this.courthouses;
    }

    public void setCourthouses(List<Courthouse> courthouses) {
        this.courthouses = courthouses;
    }
    
    @Transient
	@Override
	public String getIdPath() {
		return "/regions/" + regionId;
	}
}
