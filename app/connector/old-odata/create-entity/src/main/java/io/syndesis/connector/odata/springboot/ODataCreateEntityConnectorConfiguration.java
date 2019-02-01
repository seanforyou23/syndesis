package io.syndesis.connector.odata.springboot;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Generated;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Generated("org.apache.camel.maven.connector.SpringBootAutoConfigurationMojo")
@ConfigurationProperties(prefix = "odata-create-entity")
public class ODataCreateEntityConnectorConfiguration
        extends
            ODataCreateEntityConnectorConfigurationCommon {

    /**
     * Define additional configuration definitions
     */
    private Map<String, ODataCreateEntityConnectorConfigurationCommon> configurations = new HashMap<>();

    public Map<String, ODataCreateEntityConnectorConfigurationCommon> getConfigurations() {
        return configurations;
    }
}
